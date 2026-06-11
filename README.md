フォルダ構成
Python:FFT生成のために使用している
frontend:計算したFFTの値を描画されている。また今回はReactを使用している
backend:FFTの値をReactに返す。また今回はphpを使用している

現時点の進捗
・FastApiからのfft情報から波形グラフを作成した
・FastApiにリクエストを返す

次
ファイルごとのAPIの整理
・Pythonからjsonを受け取りそれがプロットできるように実装する → FastApiでどうやってリクエストを受け取るかを調べる
・ファイルインポートの時の送信ボタンのコンポーネントを追加 → でき始めている
Radio Bottomからパラメータを持ってきてFFTに代入する(この時はTypeScriptで受取りphpへリクエストする)

理解したこと
・useStatusの使い方
・親コンポーネントにファイル情報を送りたいときはonResultを使う


コンポーネント
1.ボタンの送信とボタンでのアップロードがごちゃごちゃのためそのあたりとコンポーネントの粒度を確認する


画面一覧
figmaを使用
画面遷移図
API一覧
DB設計
ディレクトリ構成FFTをPythonで実装してそれをFastAPIでフロントエンドにレスポンスで返す


起動
npm run dev

uvicorn app.main:app --reload
http://127.0.0.1:8000/docs
