# Defina a imagem base
FROM debian:bullseye-slim

# Defina o diretório de trabalho
WORKDIR /app

# Copie o script de entrada para o contêiner
COPY entrypoint.sh /entrypoint.sh

# Dê permissão de execução ao script
RUN chmod +x /entrypoint.sh

# Defina o script como ponto de entrada
ENTRYPOINT ["/entrypoint.sh"]
