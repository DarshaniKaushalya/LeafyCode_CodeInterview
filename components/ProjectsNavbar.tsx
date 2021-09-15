import React, { FunctionComponent } from 'react'
import { Category } from '../type'



export const NavItem:FunctionComponent<{
    value:Category | "all";
    handlerFliterCategory:Function;
    active:string


}> = ({
    value,
    handlerFliterCategory,
    active
}) => {
    
    //acrive item
    let className ="capitalize cursor-pointer hover:text-green" 
    if(active === value)
      className += " text-green"
      //concatinating -> if you not put a space before text-green , you cannot see active item
    
    return (
        <li className={className}
        onClick={()=>handlerFliterCategory(value)}>
            {value}
        </li>
    );
};

const ProjectsNavbar: FunctionComponent<{handlerFliterCategory:Function,active:string}> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none" >
            <NavItem value="all" {...props}/>
            <NavItem value="react" {...props}/>
            <NavItem value="node" {...props}/>
            <NavItem value="java" {...props}/>
            <NavItem value="j2ee" {...props}/>
            <NavItem value="php" {...props}/>


        </div>
    )
}

export default ProjectsNavbar
