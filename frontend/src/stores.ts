import { asyncReadable, writable } from '@square/svelte-store';

import { loadData, getModel } from '$lib/model.js';

export const mnistDataStore = asyncReadable(null, async () => {
	return await loadData();
});

export const modelStore = writable(getModel());
