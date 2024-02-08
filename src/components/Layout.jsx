import React from 'react';

export default function Layout({ children, initState }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous" />
        <script defer src="/app.js" />
        <script defer src="/vendor.js" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.initState=${JSON.stringify(initState)}`,
          }}
        />
        <title>Zoo</title>
      </head>
      <body>
        <div
          id="background"
          style={{
            backgroundImage: 'url("https://w.forfun.com/fetch/66/66fdff9038e8cb9be322a50588e13b84.jpeg")',
            backgroundSize: 'cover', // Покрыть весь экран, сохраняя пропорции изображения
            position: 'fixed', // Фиксированное позиционирование, чтобы изображение оставалось на месте при прокрутке
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.6,
            zIndex: -1,
          }}
        />
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
