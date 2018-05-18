import { configure } from '@storybook/react'

const loadStories = () => require('../stories/index.jsx')
configure(loadStories, module)
