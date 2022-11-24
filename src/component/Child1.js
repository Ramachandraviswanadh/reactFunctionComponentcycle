import { useEffect } from 'react'

const Child1 = () => {
	useEffect(() => {
		console.log('Child: Component has mounted')
	}, [])

	useEffect(() => {
		return () => {
			console.log('Child: Component has unmounted')
		}
	}, [])

  return <h1>Child1</h1>;
};

export default Child1;