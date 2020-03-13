import React, { useEffect, useRef, useState } from 'react';
import { useInterval } from 'use-interval'
import * as d3 from 'd3'

export default function Correspondences(props) {
    let width = 800
    let height = 600 // TODO is overwritten constantyl - fix

    const generateRandomDataset = () => {
        const tmpArray = Array(30).fill(0).map(() => ([
            Math.random() * width + 10,
            Math.random() * height + 10,
        ]))
        console.log(height)
        return tmpArray
    }

    const getData = () => {
        return (props.persons)
    }

    const [dataset, setDataset] = useState(generateRandomDataset())
    // const [dataset, setDataset] = useState(getData())

    const mount = useRef(null)
    const mountContainer = useRef(null)
    let viz = useRef(null)
    let circles = useRef(null)
    let cursor = useRef(null)
    let svg = useRef(null)
    let simulation = useRef(null)

    //componentDidMount
    useEffect(() => {
        // height = mount.current.getBoundingClientRect().height
        // width = mount.current.getBoundingClientRect().width
        updateWindow()
        window.onresize = updateWindow
        setDataset(generateRandomDataset())
        console.log(width)
        console.log(height)
    },[])

    useEffect(() => {
        createTree()
        // createBase()
        createSimulation()
        // createCursor()
    }, [dataset])

    useInterval(() => {
        const newDataset = generateRandomDataset()
        setDataset(newDataset)
    }, 2000)

    function createTree() {
        const svgElement = d3.select(svg.current)
        svgElement.selectAll("circle")
            .data(dataset)
            .join("circle")
            .attr("cx", d => d[0])
            .attr("cy", d => d[1])
            .attr("r", 3)
    }

    function updateWindow() {
        width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth
        height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight
        console.log(width)
        d3.select(svg.current).attr('width', width).attr('height', height)
    }

    // function createBase() {
    //     viz.current = {}
    //     viz.current.svg = d3.select(".d3Canvas").append("svg")
    //         .attr("width", width)
    //         .attr("height", height)
    //         .on("mousemove", mousemove)
    // }
    // function createCursor() {
    //     viz.current.cursor = viz.current.svg.append("circle")
    //         .attr("r", 30)
    //         .attr("transform", "translate(-100,-100)")
    //         .attr("class", "cursor")
    // }

    function createSimulation() {
        var simulation = d3.forceSimulation(props.persons)
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter());
        console.log(simulation)
    }

    function tick() {
        console.log("ticking")
    }


    function mousemove() {
        viz.current.cursor.attr("transform", "translate(" + d3.mouse(this) + ")");
    }

    return (
        <div className="container main-container">
            <div className="row" ref={mountContainer}>
                <div className="col-md-12" id="mount">
                    <svg ref={svg}>
                        {dataset.map(([x, y], i) => (
                            <Circle key={i} cx={x} cy={y} r="3" />
                        ))}
                    </svg>
                </div>
            </div>
        </div>
    )
}

const Circle = () => {
    return (
        <circle
            cx="10"
            cy="10"
            r="3"
        />
    )
}