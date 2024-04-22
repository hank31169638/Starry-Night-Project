# 使用node.js 16版本的alpine镜像作为基础镜像
# 工作目录设置为/app
# 复制package.json和package-lock.json到镜像中
# 安装依赖
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ../../../Test/approuteTest_1/frontend .
RUN ["npm" ,"run" ,"dev"]

# 运行阶段
#FROM node:16-alpine
#WORKDIR /app
#COPY --from=builder /app/next.config.js ./  # 如果需要，复制配置文件
#COPY --from=builder /app/public ./public  # 复制静态资源
#COPY --from=builder /app/.next ./.next  # 复制构建产物
#COPY --from=builder /app/node_modules ./node_modules
#EXPOSE 3000
#CMD ["npm", "run", "dev"]