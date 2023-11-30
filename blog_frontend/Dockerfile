FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app
RUN rm -rf node_modules
RUN pnpm install
RUN pnpm run build
EXPOSE 5173

CMD ["pnpm","dev","--host"]