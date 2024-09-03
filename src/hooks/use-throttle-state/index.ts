import { Dispatch, useEffect, useRef, useState } from 'react'

export const useThrottleState = <T>(
	value: T,
	ms: number = 200,
): [T, Dispatch<any>, (value: T) => void] => {
	const [state, setState] = useState<T>(value)
	const valueRef = useRef<T>(value)
	const timerRef = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
		;() => {
			if (timerRef.current) {
				clearTimeout(timerRef.current)
				timerRef.current = null
			}
		}
	}, [])

	const throttleSetState = (value: T) => {
		if (timerRef.current === null) {
			setState(value)
			timerRef.current = setTimeout(() => {
				if (valueRef.current !== state) {
					setState(valueRef.current)
				}
				timerRef.current = null
			}, ms)
		} else {
			valueRef.current = value
		}
	}

	return [state, setState, throttleSetState]
}
