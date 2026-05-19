# Sanity – Rusben CV

Proyecto independiente para el CMS. Al desplegar en Vercel, configura este directorio como **root** del proyecto para servir el Studio en `admin.dominio.com`.

## Proyecto Sanity

- **Project ID:** `2za5lqrr`
- **Dataset:** `production`
- **Base path:** `/sanity` (acceso en `http://localhost:3333/sanity` en local)

## Comandos (local)

```bash
cd sanity
pnpm install
pnpm dev      # → http://localhost:3333/sanity
pnpm build    # Build para producción
pnpm deploy   # Despliega a sanity.studio (opcional)
```

## Deploy en Vercel (admin.dominio.com)

1. Nuevo proyecto en Vercel.
2. **Root Directory:** `sanity`
3. **Build Command:** `pnpm build` (o `npm run build`)
4. **Output Directory:** `dist`
5. Dominio: `admin.tudominio.com`

## Schema

- **Case Study:** título, slug, client, challenge, solution, results (metric/value/change), tags, icon, gradient, featured, order.
