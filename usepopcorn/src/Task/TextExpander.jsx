import React from 'react'
import Text from './Text'

const TextExpander = () => {
    return (
        <>
            <div className='task-parent'>
                <Text text="Read more" className="blue button" textLength={20} collapseText="Show Less">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel neque facilis.
                    Ea voluptatibus blanditiis tempora veniam minus, doloremque non iusto accusantium.
                    Voluptates quo illo consectetur excepturi. Facilis, ea suscipit praesentium vel dolore
                    quo et cum! Dolore culpa ducimus iure, itaque expedita adipisci dolores quas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel neque facilis.
                    Ea voluptatibus blanditiis tempora veniam minus, doloremque non iusto accusantium.
                    Voluptates quo illo consectetur excepturi. Facilis, ea suscipit praesentium vel dolore
                    quo et cum! Dolore culpa ducimus iure, itaque expedita adipisci dolores quas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel neque facilis.
                    Ea voluptatibus blanditiis tempora veniam minus, doloremque non iusto accusantium.
                    Voluptates quo illo consectetur excepturi. Facilis, ea suscipit praesentium vel dolore
                    quo et cum! Dolore culpa ducimus iure, itaque expedita adipisci dolores quas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
                <Text text={"Show more"} className="yello button" textLength={40} expanded="true" collapseText="Show Less">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel neque facilis.
                    Ea voluptatibus blanditiis tempora veniam minus, doloremque non iusto accusantium.
                    Voluptates quo illo consectetur excepturi. Facilis, ea suscipit praesentium vel dolore
                    quo et cum! Dolore culpa ducimus iure, itaque expedita adipisci dolores quas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel neque facilis.
                    Ea voluptatibus blanditiis tempora veniam minus, doloremque non iusto accusantium.
                    Voluptates quo illo consectetur excepturi. Facilis, ea suscipit praesentium vel dolore
                    quo et cum! Dolore culpa ducimus iure, itaque expedita adipisci dolores quas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel neque facilis.
                    Ea voluptatibus blanditiis tempora veniam minus, doloremque non iusto accusantium.
                    Voluptates quo illo consectetur excepturi. Facilis, ea suscipit praesentium vel dolore
                    quo et cum! Dolore culpa ducimus iure, itaque expedita adipisci dolores quas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
                <Text text={"Read more"} className="blue button"  textLength={80} collapseText="Show Less">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel neque facilis.
                    Ea voluptatibus blanditiis tempora veniam minus, doloremque non iusto accusantium.
                    Voluptates quo illo consectetur excepturi. Facilis, ea suscipit praesentium vel dolore
                    quo et cum! Dolore culpa ducimus iure, itaque expedita adipisci dolores quas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel neque facilis.
                    Ea voluptatibus blanditiis tempora veniam minus, doloremque non iusto accusantium.
                    Voluptates quo illo consectetur excepturi. Facilis, ea suscipit praesentium vel dolore
                    quo et cum! Dolore culpa ducimus iure, itaque expedita adipisci dolores quas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel neque facilis.
                    Ea voluptatibus blanditiis tempora veniam minus, doloremque non iusto accusantium.
                    Voluptates quo illo consectetur excepturi. Facilis, ea suscipit praesentium vel dolore
                    quo et cum! Dolore culpa ducimus iure, itaque expedita adipisci dolores quas.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
            </div>
        </>
    )
}

export default TextExpander