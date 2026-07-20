export const config = {
  // Aplica o bloqueio para todas as páginas e rotas do site
  matcher: '/(.*)',
};

export default function middleware(request) {
  // A Vercel injeta automaticamente o país de origem no cabeçalho da requisição
  const country = request.headers.get('x-vercel-ip-country');

  // Verifica se o país foi identificado e se é diferente do Brasil ('BR')
  if (country && country !== 'BR') {
    return new Response(
      `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acesso Bloqueado</title>
    <style>
        body { 
            font-family: 'Montserrat', sans-serif; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            margin: 0; 
            background-color: #f1f3f5; 
            color: #343a40; 
        }
        .container { 
            text-align: center; 
            padding: 40px 30px; 
            background: white; 
            border-radius: 12px; 
            box-shadow: 0 4px 20px rgba(0,0,0,0.08); 
            max-width: 450px;
            border-top: 5px solid #d32f2f;
        }
        h1 { 
            color: #d32f2f; 
            margin-top: 0;
            font-size: 24px;
        }
        p {
            line-height: 1.5;
            color: #495057;
            margin-bottom: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🛡️ Acesso Restrito</h1>
        <p>Por questões de segurança, o acesso a esta plataforma está liberado <strong>exclusivamente para o território brasileiro</strong>.</p>
    </div>
</body>
</html>`,
      {
        status: 403,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      }
    );
  }
}
