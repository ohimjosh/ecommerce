import React from 'react'
import { useRouter } from 'next/router'
import { Text, View } from '@aws-amplify/ui-react'

function Success() {
	const router = useRouter()
	const { email = 'test@sample.com' } = router.query

	return (
		<View>
			Thank you! We've sent an email to{' '}
			<Text as="span" fontWeight={'bold'}>
				{email}
			</Text>{' '}
			with your downloads.
		</View>
	)
}

export default Success