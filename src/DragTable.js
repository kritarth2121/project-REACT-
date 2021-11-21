export const DragTable = (props) => {
    if (!props.excelData.length) {
        return <div className="noFileContainer ml-12">No File Uploaded</div>
    }
    const table = props.excelData
    const tableBody = table?.slice(1)
    const tableHead = table[0]
    const keys = Object.keys(tableHead)

    const dragstart = (e, component) => {
        e.dataTransfer.setData('id', component)
    }
    const onDragOver = (ev) => {
        ev.preventDefault()
    }

    const drop = (e) => {
        let id = e.dataTransfer.getData('id')
        if (id === 'row') {
            const element = document.createElement('div')
            element.style.cssText = `position: absolute;left:${e.clientX}px;top:${e.clientY}px;min-width:200px ;min-height:200px`
            element.className = 'border-2 border-red'
            element.id = (Math.random() + 1).toString(36).substring(7) + 'row'
            element.ondrop = function (e) {
                drop(e)
            }
            element.ondragover = function (e) {
                onDragOver(e)
            }
            element.innerHTML = 'Row'
            document.getElementById('root').appendChild(element)
        } else if (id === 'col') {
            const element = document.createElement('div')
            element.style.cssText = `position: absolute;left:${e.clientX}px;top:${e.clientY}px;min-width:200px ;min-height:200px`
            element.className = ' border-2 border-red flex-row flex'
            element.id = (Math.random() + 1).toString(36).substring(7) + 'col'
            element.ondrop = function (e) {
                drop(e)
            }
            element.ondragover = function (e) {
                onDragOver(e)
            }

            element.innerHTML = 'Column'

            document.getElementById('root').appendChild(element)
        } else {
            let target = e.target

            while (target.id === '') {
                target = target.parentNode
            }
            const targetId = target.id
            const element = document.createElement('div')
            if (targetId.slice(-3) === 'row') {
                element.className = 'flex flex-row'
            } else {
                element.className = 'flex flex-col'
            }
            const parentElement = document.getElementById(targetId)

            for (let i = 0; i < tableBody.length; i++) {
                let child = document.createElement('div')
                child.className = 'border-2 border-blue-500 w-20 h-10'
                child.innerHTML = tableBody[i][id]
                element.appendChild(child)
            }
            parentElement.appendChild(element)
        }
    }

    return (
        <div
            className="w-full h-full ml-12"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => onDragOver(e)}
        >
            <div className="flex justify-col">
                <img
                    draggable
                    onDragStart={(e) => dragstart(e, 'col')}
                    src="https://img.icons8.com/color/48/000000/select-column.png"
                    alt="column"
                />
                <img
                    draggable
                    onDragStart={(e) => dragstart(e, 'row')}
                    src="https://img.icons8.com/color/50/000000/select-row.png"
                    alt="row"
                />
            </div>

            <div className="flex flex-col w-44">
                {keys.length &&
                    keys.map((key) => (
                        <div
                            key={tableHead[key]}
                            draggable
                            onDragStart={(e) => dragstart(e, key)}
                            className="border-red-500 border-2"
                        >
                            {tableHead[key]}
                        </div>
                    ))}{' '}
            </div>
        </div>
    )
}
