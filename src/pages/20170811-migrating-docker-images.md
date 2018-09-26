---
title: Migrating Docker Images
date: '2017-08-11T12:55:00Z'
qiitaUrl: ''
---

Do you run your own Docker Registry server? Ever got tired of tagging
all your images with the registry URL and pushing them one by one? Well,
we do and it is very exhausting when you keep doing it again and again. So
I came up with this script.

<!--excerpt-->

### Context

We're developing an enterprise software for a client with a microservices
architecture that utilizes [Docker][] containers and [DC/OS][]
orchestration.

### Our Setup

- Dozens of microservices built with [Spring Framework][]
- Microservices runs on [DC/OS][].
- Few environments (development, staging, production) each having their
  own registry.

Some of the things you might ask me:

- **_"Why the f\*\*\* do you have more than one registry?"_**
  Production was intended to have its own registry since it doesn't have
  any access to the internet.

- **_"Why not use a third party private docker registry?"_**
  Production servers doesn't have any internet access (most of the app
  is meant to be access via VPN)

- **_"Why not use [Jenkins][] or some other in-premise CI/CD that
  can automatically tag and push your images to your different
  envirnments?"_**
  Actually, I'm not so sure because I've heard other companies use CI/CD
  from development -> production. Maybe the client doesn't want CI/CD in
  the production environment. I really don't have any idea regarding this.

### Problem

It is a pain in the arse when you need to manually tag and push all your
images from one registry to another, whether it may come from your local
machine or one of your registry servers.

### Solution

I've written a [`transfer_images.sh`][transferscript] found on my
[scripts repo][scriptsrepo].

Usage:

```shell
 ./transfer_images.sh [-s source] -d destination -m matcher[,matcher2,matcher3...] [-p]
 where:
    -h print usage
    -s source registry (optional)
        example: registry.hub.docker.com
    -d destination registry (required)
        example: registry.mydomain.com
    -m matchers (required)
        all the images that will be tagged with the destination
        example nodejs,jenkins,chronos
    -p push images (optional)
        push all tagged images
```

### Examples

Given these docker images in your local repositories:

```shell
 REPOSITORIES               TAG
 node                       8
 rabbitmq                   3.6.9
 postgres                   9.6.1
 yourregistry.com/node      8
 yourregistry.com/rabbitmq  3.6.9
 yourregistry.com/postgres  9.6.1
```

Tag `node` and `postgres` to `yourregistry.com`

```shell
 ./transfer_images.sh -d yourregistry.com -m node,postgres
```

Tag `node` and `rabbitmq` tagged with `yourregistry.com` to `yourotherregistry.com` and then push it

```shell
 ./transfer_images.sh -s yourregistry.com -d yourotherregistry.com -m node,rabbitmq -p
```

### Wrapping this up

So there you have it, my fancy transfer images script. I hope it will help
some of you guys/gals that face the same problem as I did. I'll write
more scripts if I encounter more repetitive and/or tedious tasks.

[docker]: https://www.docker.com/
[spring framework]: https://spring.io/
[dc/os]: https://dcos.io/
[jenkins]: https://jenkins.io/
[transferscript]: https://github.com/nasvillanueva/scripts/blob/master/transfer_images.sh
[scriptsrepo]: https://github.com/nasvillanueva/scripts
