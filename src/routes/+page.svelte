<main class="content">
	<h1>cf-anime-quotes</h1>
	<p>HTTP API to get anime quotes.</p>
	<h2 id="routes">
		<a href="#routes">#</a>
		Routes
	</h2>
	<p>Currently, there are 2 routes available.</p>
	<ol>
		<li>
			<span class="alternative">/api</span>
			<a href="/api" target="_blank">goto</a>
			<p>
				Returns all the quotes available, for a total of
				<span class="alternative">7360</span> quotes.
			</p>
		</li>
		<li>
			<span class="alternative">/api/[count]</span>
			<a href="/api/5" target="_blank">goto</a>
			<p>
				Returns at most <span class="alternative">[count]</span> quotes.
			</p>
		</li>
	</ol>
</main>

<style>
	.content {
		max-width: 500px;
		margin: auto;
	}

	.content > ol {
		padding-left: 1rem;
	}

	h2[id] > a {
		text-decoration: none;
	}

	a,
	a:visited:hover {
		color: var(--t-color-alt);
	}

	a:visited,
	a:hover {
		color: var(--t-color);
	}
</style>
