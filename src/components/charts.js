import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'
import {
    useToken
} from '@chakra-ui/react';

const theme = {
    "background": "#ffffff",
    "textColor": "#A0AEC0",
    "fontFamily": '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    "fontWeight": "bolder",
    "fontSize": 11,
    "axis": {
        "domain": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            }
        },
        "ticks": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            }
        }
    },
    "grid": {
        "line": {
            "stroke": "#dddddd",
            "strokeWidth": 1
        }
    }
}

export const SampleBar = ({ altState }) => {
const [blue, red, teal, green, orange, yellow] = useToken(
    "colors",
    ["blue.400","red.400","pink.400", "green.400", "orange.400", "purple.400"],
  );
  return (
    <ResponsiveBar
        data={altState ? [
            {
              "country": "AD",
              "hot dog": 45,
              "hot dogColor": "hsl(313, 70%, 50%)",
              "burger": 144,
              "burgerColor": "hsl(263, 70%, 50%)",
              "sandwich": 2,
              "sandwichColor": "hsl(186, 70%, 50%)",
              "kebab": 82,
              "kebabColor": "hsl(22, 70%, 50%)",
              "fries": 51,
              "friesColor": "hsl(175, 70%, 50%)",
              "donut": 189,
              "donutColor": "hsl(191, 70%, 50%)"
            },
            {
              "country": "AE",
              "hot dog": 6,
              "hot dogColor": "hsl(220, 70%, 50%)",
              "burger": 158,
              "burgerColor": "hsl(227, 70%, 50%)",
              "sandwich": 66,
              "sandwichColor": "hsl(106, 70%, 50%)",
              "kebab": 4,
              "kebabColor": "hsl(68, 70%, 50%)",
              "fries": 48,
              "friesColor": "hsl(247, 70%, 50%)",
              "donut": 132,
              "donutColor": "hsl(55, 70%, 50%)"
            },
            {
              "country": "AF",
              "hot dog": 39,
              "hot dogColor": "hsl(213, 70%, 50%)",
              "burger": 70,
              "burgerColor": "hsl(131, 70%, 50%)",
              "sandwich": 61,
              "sandwichColor": "hsl(55, 70%, 50%)",
              "kebab": 168,
              "kebabColor": "hsl(6, 70%, 50%)",
              "fries": 5,
              "friesColor": "hsl(35, 70%, 50%)",
              "donut": 61,
              "donutColor": "hsl(194, 70%, 50%)"
            },
            {
              "country": "AG",
              "hot dog": 54,
              "hot dogColor": "hsl(151, 70%, 50%)",
              "burger": 93,
              "burgerColor": "hsl(296, 70%, 50%)",
              "sandwich": 145,
              "sandwichColor": "hsl(133, 70%, 50%)",
              "kebab": 63,
              "kebabColor": "hsl(72, 70%, 50%)",
              "fries": 170,
              "friesColor": "hsl(35, 70%, 50%)",
              "donut": 103,
              "donutColor": "hsl(195, 70%, 50%)"
            },
            {
              "country": "AI",
              "hot dog": 83,
              "hot dogColor": "hsl(305, 70%, 50%)",
              "burger": 122,
              "burgerColor": "hsl(99, 70%, 50%)",
              "sandwich": 160,
              "sandwichColor": "hsl(353, 70%, 50%)",
              "kebab": 146,
              "kebabColor": "hsl(60, 70%, 50%)",
              "fries": 161,
              "friesColor": "hsl(152, 70%, 50%)",
              "donut": 67,
              "donutColor": "hsl(233, 70%, 50%)"
            },
            {
              "country": "AL",
              "hot dog": 52,
              "hot dogColor": "hsl(286, 70%, 50%)",
              "burger": 165,
              "burgerColor": "hsl(245, 70%, 50%)",
              "sandwich": 44,
              "sandwichColor": "hsl(290, 70%, 50%)",
              "kebab": 114,
              "kebabColor": "hsl(256, 70%, 50%)",
              "fries": 68,
              "friesColor": "hsl(60, 70%, 50%)",
              "donut": 77,
              "donutColor": "hsl(199, 70%, 50%)"
            },
            {
              "country": "AM",
              "hot dog": 182,
              "hot dogColor": "hsl(136, 70%, 50%)",
              "burger": 41,
              "burgerColor": "hsl(287, 70%, 50%)",
              "sandwich": 107,
              "sandwichColor": "hsl(40, 70%, 50%)",
              "kebab": 138,
              "kebabColor": "hsl(292, 70%, 50%)",
              "fries": 112,
              "friesColor": "hsl(94, 70%, 50%)",
              "donut": 16,
              "donutColor": "hsl(40, 70%, 50%)"
            }
          ] : [{
            "country": "AD",
            "hot dog": 45,
            "hot dogColor": "hsl(313, 70%, 50%)",
            "burger": 45,
            "burgerColor": "hsl(263, 70%, 50%)",
            "sandwich": 2,
            "sandwichColor": "hsl(186, 70%, 50%)",
            "kebab": 167,
            "kebabColor": "hsl(22, 70%, 50%)",
            "fries": 5,
            "friesColor": "hsl(175, 70%, 50%)",
            "donut": 76,
            "donutColor": "hsl(191, 70%, 50%)"
          },
          {
            "country": "AE",
            "hot dog": 6,
            "hot dogColor": "hsl(220, 70%, 50%)",
            "burger": 158,
            "burgerColor": "hsl(227, 70%, 50%)",
            "sandwich": 45,
            "sandwichColor": "hsl(106, 70%, 50%)",
            "kebab": 4,
            "kebabColor": "hsl(68, 70%, 50%)",
            "fries": 54,
            "friesColor": "hsl(247, 70%, 50%)",
            "donut": 132,
            "donutColor": "hsl(55, 70%, 50%)"
          },
          {
            "country": "AF",
            "hot dog": 1,
            "hot dogColor": "hsl(213, 70%, 50%)",
            "burger": 2,
            "burgerColor": "hsl(131, 70%, 50%)",
            "sandwich": 61,
            "sandwichColor": "hsl(55, 70%, 50%)",
            "kebab": 99,
            "kebabColor": "hsl(6, 70%, 50%)",
            "fries": 5,
            "friesColor": "hsl(35, 70%, 50%)",
            "donut": 76,
            "donutColor": "hsl(194, 70%, 50%)"
          }]}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        colors={{scheme: "purple_blue"}} // [blue, red, teal, green, orange, yellow]
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        enableLabel={false}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        theme={theme}
        layers={['grid', 'bars', 'markers', 'axes', 'legends', 'annotations']}
    />
);}

export const SampleLine = () => {
    const [blue500] = useToken(
        "colors",
        ["blue.500"],
      )
    return (<ResponsiveLine
    data={[{
        "id": "japan",
        "color": "hsl(235, 70%, 50%)",
        "data": [
        {
            "x": "plane",
            "y": 56
        },
        {
            "x": "helicopter",
            "y": 63
        },
        {
            "x": "boat",
            "y": 191
        },
        {
            "x": "train",
            "y": 109
        },
        {
            "x": "subway",
            "y": 170
        },
        {
            "x": "bus",
            "y": 99
        },
        {
            "x": "car",
            "y": 76
        },
        {
            "x": "moto",
            "y": 226
        },
        {
            "x": "bicycle",
            "y": 279
        },
        {
            "x": "horse",
            "y": 51
        },
        {
            "x": "skateboard",
            "y": 117
        },
        {
            "x": "others",
            "y": 246
        }
        ]
    }]}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    xScale={{ type: 'point' }}
    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    pointSize={10}
    useMesh={true}
    enablePoints={false}
    enableGridX={false}
    enableGridY={false}
    colors={[blue500]}
    theme={theme}
/>);}


export const SamplePie = ({ altState }) => (
    <ResponsivePie
        data={[
            {
              "id": "php",
              "label": "php",
              "value": altState ? 100 : 530,
              "color": "hsl(66, 70%, 50%)"
            },
            {
              "id": "sass",
              "label": "sass",
              "value": altState ? 238 : 36,
              "color": "hsl(95, 70%, 50%)"
            },
            {
              "id": "erlang",
              "label": "erlang",
              "value": altState ? 67 : 267,
              "color": "hsl(9, 70%, 50%)"
            },
            {
              "id": "java",
              "label": "java",
              "value": 33,
              "color": "hsl(85, 70%, 50%)"
            },
            {
              "id": "lisp",
              "label": "lisp",
              "value": altState ? 99 : 208,
              "color": "hsl(160, 70%, 50%)"
            }
          ]}
        margin={{ top: 0, right: 0, bottom: 80, left: 0 }}
        innerRadius={0.75}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
        colors={{scheme: "blue_purple"}}
        theme={theme}
        enableRadialLabels={false}
        enableSliceLabels={false}
    />
);

export const SampleLine2 = ({ altState }) => (
    <ResponsiveLine
        data={[
            {
              "id": "japan",
              "color": "hsl(67, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 283
                },
                {
                  "x": "helicopter",
                  "y": 264
                },
                {
                  "x": "boat",
                  "y": 63
                },
                {
                  "x": "train",
                  "y": 251
                },
                {
                  "x": "subway",
                  "y": 249
                },
                {
                  "x": "bus",
                  "y": 60
                },
                {
                  "x": "car",
                  "y": 214
                },
                {
                  "x": "moto",
                  "y": 205
                },
                {
                  "x": "bicycle",
                  "y": 253
                },
                {
                  "x": "horse",
                  "y": 260
                },
                {
                  "x": "skateboard",
                  "y": 136
                },
                {
                  "x": "others",
                  "y": 287
                }
              ]
            },
            {
              "id": "france",
              "color": "hsl(295, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 298
                },
                {
                  "x": "helicopter",
                  "y": 209
                },
                {
                  "x": "boat",
                  "y": 128
                },
                {
                  "x": "train",
                  "y": 134
                },
                {
                  "x": "subway",
                  "y": 78
                },
                {
                  "x": "bus",
                  "y": 36
                },
                {
                  "x": "car",
                  "y": 169
                },
                {
                  "x": "moto",
                  "y": 231
                },
                {
                  "x": "bicycle",
                  "y": 215
                },
                {
                  "x": "horse",
                  "y": 227
                },
                {
                  "x": "skateboard",
                  "y": 79
                },
                {
                  "x": "others",
                  "y": 82
                }
              ]
            },
            {
              "id": "us",
              "color": "hsl(239, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": 241
                },
                {
                  "x": "helicopter",
                  "y": 93
                },
                {
                  "x": "boat",
                  "y": 116
                },
                {
                  "x": "train",
                  "y": 6
                },
                {
                  "x": "subway",
                  "y": 178
                },
                {
                  "x": "bus",
                  "y": 217
                },
                {
                  "x": "car",
                  "y": 296
                },
                {
                  "x": "moto",
                  "y": !altState ? 232 : 192
                },
                {
                  "x": "bicycle",
                  "y": !altState ? 234 : 79
                },
                {
                  "x": "horse",
                  "y": 245
                },
                {
                  "x": "skateboard",
                  "y": 15
                },
                {
                  "x": "others",
                  "y": 136
                }
              ]
            },
            {
              "id": "germany",
              "color": "hsl(216, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": !altState ? 89 : 71
                },
                {
                  "x": "helicopter",
                  "y": 239
                },
                {
                  "x": "boat",
                  "y": 2
                },
                {
                  "x": "train",
                  "y": 295
                },
                {
                  "x": "subway",
                  "y": 265
                },
                {
                  "x": "bus",
                  "y": !altState ? 22 : 278
                },
                {
                  "x": "car",
                  "y": 185
                },
                {
                  "x": "moto",
                  "y": 30
                },
                {
                  "x": "bicycle",
                  "y": 100
                },
                {
                  "x": "horse",
                  "y": !altState ? 34 : 211
                },
                {
                  "x": "skateboard",
                  "y": 148
                },
                {
                  "x": "others",
                  "y": 12
                }
              ]
            },
            {
              "id": "norway",
              "color": "hsl(336, 70%, 50%)",
              "data": [
                {
                  "x": "plane",
                  "y": !altState ? 234 : 217
                },
                {
                  "x": "helicopter",
                  "y": !altState ? 234 : 276
                },
                {
                  "x": "boat",
                  "y": 36
                },
                {
                  "x": "train",
                  "y": 186
                },
                {
                  "x": "subway",
                  "y": 138
                },
                {
                  "x": "bus",
                  "y": !altState ? 33 : 133
                },
                {
                  "x": "car",
                  "y": 79
                },
                {
                  "x": "moto",
                  "y": 254
                },
                {
                  "x": "bicycle",
                  "y": 292
                },
                {
                  "x": "horse",
                  "y": 40
                },
                {
                  "x": "skateboard",
                  "y": 295
                },
                {
                  "x": "others",
                  "y": 211
                }
              ]
            }
          ]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)