import React from 'react'
import Amplify from 'aws-amplify'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import config from '../src/aws-exports'


Amplify.configure(config)
export default function AmplifyComp() {
  return (
    <AmplifyProvider>

    </AmplifyProvider>
  )
}
