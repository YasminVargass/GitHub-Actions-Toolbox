# Usar uma imagem base oficial do Node.js
FROM node:14

# Configurar o diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Comando para iniciar a aplicação
CMD ["node", ".github/js-action/src/index.js"]
