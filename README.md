## php yii + vite vue example

### Quick Start

1. Start frontend dev server

```sh
cd frontend
npm i
npm run dev
```

2. Start yii dev server

```sh
php yii serve --port=8888
```

3. Open [localhost:8888](http://localhost:8888) and you will see the result

### Build

```sh
cd frontend
npm run build
```

```sh
php yii serve --port=8888
```

If devServer on port 5173 is not started, the Yii php server will automatically read the vite build manifest and try to serve the static files.
