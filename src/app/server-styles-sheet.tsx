'use client'

import { useServerInsertedHTML } from 'next/navigation'
import { getCssText, globalCss } from '../../stitches.config'
import { useEffect } from 'react'

export function ServerStylesheet({
    children,
}: {
    children: JSX.Element
}): JSX.Element {
    const globalStyles = globalCss({
        '*': {
            margin: '0',
            padding: '0',
        },
    })

    useEffect(() => {
        globalStyles()
    }, [globalStyles])

    useServerInsertedHTML(() => {
        return (
            <style
                id="stitches"
                dangerouslySetInnerHTML={{ __html: String(getCssText()) }}
            />
        )
    })

    return children
}
