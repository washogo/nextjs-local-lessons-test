export default function NewMemoForm() {
  return (
    <form className="space-y-4 p-4 rounded bg-white">
      <h2 className="font-semibold text-sky-900">新規作成</h2>

      <div className="space-y-2">
        <label className="block text-sm">タイトル</label>
        <input type="text" name="title" placeholder="タイトル" required className="w-full p-2 border rounded" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm">詳細</label>
        <textarea name="content" placeholder="詳細" className="w-full h-28 p-2 border rounded" />
      </div>

      {/* エラーメッセージ領域（任意、後続章で制御） */}
      {/* <p className="text-sm text-red-600">エラーメッセージをここに表示します。</p> */}

      <button type="button" className="inline-flex bg-sky-500 px-4 py-2 rounded text-white hover:cursor-pointer">
        送信
      </button>
    </form>
  );
}
