'use client';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
export default function ThemeToggle(){
const [dark,setDark]=useState(false);
useEffect(()=>{setDark(document.documentElement.dataset.theme==='dark')},[]);
function toggle(){const next=!dark;document.documentElement.dataset.theme=next?'dark':'light';setDark(next);try{localStorage.setItem('ghdp-theme',next?'dark':'light')}catch{}}
return <button className="theme-toggle" type="button" onClick={toggle} aria-label={dark?'Switch to light mode':'Switch to dark mode'} title={dark?'Switch to light mode':'Switch to dark mode'}><Moon className="moon-icon" size={17}/><Sun className="sun-icon" size={17}/><span className="theme-label">{dark?'Light':'Dark'}</span></button>
}
