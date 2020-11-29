import { useState, useMemo } from "react";
import _ from "lodash";
import { Box } from '@chakra-ui/react';
import Measure from 'react-measure'

/**
 * Renders a responsive box with absolute sizes
 * For use with nivo responsive charts, as they need a box with an absolute size.
 */
export const AbsBox = ({ children }) => {
    const [measurement, updateMeasurement] = useState({});
    const debouncedUpdateMeasurement = useMemo(() => _.debounce(updateMeasurement, 100), [updateMeasurement, { leading: false, trailing: true, maxWait: 1000 }]);
    return (<>
        <Box position="relative">
            <Box position="absolute" top="0" left="0" w={measurement?.width} h={measurement?.height}>
                {/* This box is always as big as the Measure box down below, just that this one has a fixed width and height*/}
                {children}
            </Box>
        </Box>
        <Measure
            bounds
            onResize={contentRect => {debouncedUpdateMeasurement(contentRect.bounds)}}
        >
            {({ measureRef }) => (
                <Box transition="width 1s, height 1s" h="100%" position="relative" ref={measureRef} minH="300px" />
            )}
        </Measure>
    </>)
};