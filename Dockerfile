FROM nginx:stable-alpine

MAINTAINER Andriy Kornatskyy <andriy.kornatskyy@live.com>

ENV NODE_ENV=prod

RUN set -ex \
    \
    && apk add --no-cache --virtual .build-deps \
        nodejs \
        git \
    \
    && git clone https://github.com/akornatskyy/sample-blog-react-redux.git src \
    \
    && cd src \
    && npm i \
    \
    && npm run build \
    && mv dist/* /usr/share/nginx/html \
    \
    && cp nginx.conf /etc/nginx/nginx.conf \
    \
    && rm -rf /src ~/.npm /tmp/npm-* \
    && apk del .build-deps

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
