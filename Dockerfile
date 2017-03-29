FROM nginx:stable-alpine

MAINTAINER Andriy Kornatskyy <andriy.kornatskyy@live.com>

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]