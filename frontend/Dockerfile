from archlinux:latest

# packages for build files of frontend
RUN pacman -Sy --needed --noconfirm \
  nodejs \
  npm

RUN useradd -m user \
  && chown -R user:user /home/user
WORKDIR /home/user
USER user

COPY /docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]
