import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
	const { keyword } = useParams();
	const navigate = useNavigate();
	const [text, setText] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/videos/${text}`);
	};
	useEffect(() => {
		setText(keyword || '');
	}, [keyword]);

	return (
		<header className="fixed top-0 left-0 z-10 w-full bg-zinc-900">
			<div className="flex p-4 text-2xl border-b border-zinc-700 w-full max-w-screen-2xl m-auto">
				<Link to="/" className="flex items-center">
					<BsYoutube className="text-3xl text-red text-brand" />
					<h1 className="font-semibold ml-1 text-2xl tracking-tighter">
						<span>YouTube</span>
						<sup className="relative -top-3 text-xs ml-1 text-zinc-400">KR</sup>
					</h1>
				</Link>
				<form onSubmit={handleSubmit} className="w-full flex justify-center">
					<input
						type="text"
						placeholder="검색"
						value={text}
						onChange={(e) => setText(e.target.value)}
						className="w-7/12 h-10 px-5 rounded-l-full border border-gray-700 text-base bg-black text-gray-50"
					/>
					<button className="bg-zinc-800 px-6 rounded-r-full border border-l-0 border-gray-700">
						<BsSearch className="text-base" />
					</button>
				</form>
			</div>
		</header>
	);
}
