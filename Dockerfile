# Використовуємо офіційний образ Node.js як базовий
FROM node:18

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо файли package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо всі файли
COPY . .

# Будуємо фронтенд
RUN npm run build

# Виставляємо порт
EXPOSE 0002

# Запускаємо фронтенд
CMD ["npm", "start"]
