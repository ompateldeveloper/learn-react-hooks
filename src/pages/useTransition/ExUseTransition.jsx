import { Loader, Loader2 } from 'lucide-react';
import React, { useState, useTransition } from 'react'

export default function ExUseTransition() {
    const [tab, setTab] = useState(1);
    const [isPending, startTransition] = useTransition()
    const selectTab = (nextTab) => {
        startTransition(() => {
            setTab(nextTab)
        })
    }

    return (
        <div>
            <div className='flex items-center container '>
                <TabButton tab={tab} selectTab={selectTab} tabIndex={1}>tab1</TabButton>
                <TabButton tab={tab} selectTab={selectTab} tabIndex={2}>tab2</TabButton>
                <TabButton tab={tab} selectTab={selectTab} tabIndex={3}>tab3</TabButton>
            </div>
            <div className="tabs">
                <TabContainer tab={tab} tabIndex={1} className='bg-red-200'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tenetur placeat! Eveniet soluta maiores hic, unde dicta facilis, architecto quod nisi, sed placeat accusantium quae voluptatem tempore magnam repudiandae fuga!
                </TabContainer>
                {<ExpensiveTabContainer tab={tab} tabIndex={2}/>}
                <TabContainer tab={tab} tabIndex={3} className='bg-fuchsia-300'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem molestias dignissimos optio, fugiat aspernatur assumenda in commodi, quaerat accusamus accusantium sapiente culpa possimus cumque delectus corporis sit, veritatis quod.
                </TabContainer>
            </div>

        </div>
    )
}

function TabButton(props) {
    return (
        <button onClick={() => props.selectTab(props.tabIndex)}
            className={`px-2 py-px bg-slate-300  border-b-2 flex ${props.tab === props.tabIndex && "border-b-blue-500"}`}
        >
            {props.children}
        </button>
    )
}
function TabContainer(props) {


    return (
        props.tab===props.tabIndex
        &&
        <div className="container" {...props}>
            {props.children}
        </div>
    )
}

function ExpensiveTabContainer(props) {
    let items = [];
    for (let i = 0; i < 500; i++) {
      items.push(<SlowPost key={i} index={i} />);
    }
    return (
        props.tab===props.tabIndex
        &&
        <div className="container" {...props}>
            {items}
        </div>
    )
}
function SlowPost({ index }) {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
      // Do nothing for 1 ms per item to emulate extremely slow code
    }
  
    return (
      <li className="item">
        Post #{index + 1}
      </li>
    );
  }