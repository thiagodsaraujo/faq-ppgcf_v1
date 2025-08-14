
FROM nginx:alpine

# Copiar arquivos da aplicação para o diretório padrão do nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY attached_assets/ /usr/share/nginx/html/attached_assets/

# Configuração personalizada do nginx (opcional)
COPY nginx.conf /etc/nginx/nginx.conf

# Expor a porta 80
EXPOSE 80

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]
