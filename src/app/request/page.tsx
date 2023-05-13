export default function Request() {
	return (
		<div className="w-1/2 mx-auto py-4">
			<h1 className="text-3xl mt-2 text-center">クエスト作成申請</h1>
			<p className="mt-6 mb-4">
				クエストを新たに作成することができます。送信した申請は管理者に承認されるとクエスト一覧に表示されるようになります。
			</p>
			<form className="flex flex-col gap-4">
				<input
					placeholder="クエスト名"
					className="w-full border border-black rounded-md p-2"
				/>
				<textarea
					placeholder="クエストの説明"
					className="w-full min-h-[128px] border border-black rounded-md p-2"
				/>
				<div className="text-right">
					<button className="bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded-xl">
						申請を送信
					</button>
				</div>
			</form>
		</div>
	)
}
