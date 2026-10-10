# Servidor local para probar el sitio: powershell -ExecutionPolicy Bypass -File herramientas\servir.ps1
# Luego abre http://localhost:4173/ (el sitio también funciona con doble clic en index.html).
param([string]$Root = (Join-Path $PSScriptRoot ".."), [int]$Port = 4173)
$Root = (Resolve-Path $Root).Path
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$Port/")
$l.Start()
Write-Host "Sirviendo $Root en http://localhost:$Port/"
$types = @{ ".html"="text/html; charset=utf-8"; ".css"="text/css; charset=utf-8"; ".js"="text/javascript; charset=utf-8"; ".json"="application/json"; ".png"="image/png"; ".jpg"="image/jpeg"; ".svg"="image/svg+xml"; ".mp4"="video/mp4"; ".webp"="image/webp" }
while ($l.IsListening) {
  $c = $l.GetContext()
  $p = [Uri]::UnescapeDataString($c.Request.Url.AbsolutePath)
  if ($p -eq "/") { $p = "/index.html" }
  $f = Join-Path $Root ($p.TrimStart("/"))
  try {
    if (Test-Path $f -PathType Leaf) {
      $b = [IO.File]::ReadAllBytes($f)
      $e = [IO.Path]::GetExtension($f).ToLower()
      $c.Response.ContentType = $(if ($types.ContainsKey($e)) { $types[$e] } else { "application/octet-stream" })
      $c.Response.Headers.Add("Cache-Control", "no-store")
      $c.Response.OutputStream.Write($b, 0, $b.Length)
    } else { $c.Response.StatusCode = 404 }
  } catch {}
  $c.Response.Close()
}
