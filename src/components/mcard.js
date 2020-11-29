import React, { useRef, useEffect } from 'react';
import { useDrag, useDrop, useDragLayer } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { Box, Checkbox } from '@chakra-ui/react';

const layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
};
function getItemStyles(initialOffset, currentOffset) {
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        };
    }
    let { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform,
        WebkitTransform: transform,
    };
}
export const CustomDragLayer = (props) => {
    const { itemType, isDragging, item, initialOffset, currentOffset, } = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
    }));
    function renderItem() {
        switch (itemType) {
            case ItemTypes.CARD:
        return <Box transform="rotate(-0.01turn)" title={item.title}>{item.children}</Box>;
            default:
                return null;
        }
    }
    if (!isDragging) {
        return null;
    }
    return (<div style={layerStyles}>
			<div style={getItemStyles(initialOffset, currentOffset)}>
				{renderItem()}
			</div>
		</div>);
};


const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
};

const ItemTypes = {
    CARD: 'card',
    TODO: 'todo',
  }
export const MCard = ({ id, text, index, moveCard, ticked, children, kind }) => {
    const itemType = kind === "todo" ? ItemTypes.TODO : ItemTypes.CARD;
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: itemType,
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: itemType, id, index, children },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0.2 : 1;
    drag(drop(ref));

    useEffect(() => {
        if(kind === "todo") return;
        preview(getEmptyImage(), { captureDraggingState: true });
    }, []);

    return (<Box ref={ref} opacity={opacity} cursor="move">{children}</Box>);
};
