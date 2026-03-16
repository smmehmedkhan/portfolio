'use client'

import React, { Component, type ReactNode } from 'react'
import ErrorLayout from '@/components/partials/Error'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    // In production, you would log this to an error reporting service
    // e.g., Sentry.captureException(error, { contexts: { react: errorInfo } })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <main className="wrapper min-h-[calc(100dvh-60px)]">
          <ErrorLayout error={this.state.error} reset={this.handleReset} />
        </main>
      )
    }

    return this.props.children
  }
}
