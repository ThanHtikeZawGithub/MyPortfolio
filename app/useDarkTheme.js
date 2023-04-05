import React, { useEffect, useState } from 'react'

export const useDarkTheme = () => {

//helper function for dark-light theme
    const darkEffect = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState('');

    useEffect(()=>{
        const mediaQuery = window.matchMedia(darkEffect);
        const userPref = window.localStorage.getItem('theme');
        const handleChange = () => {
            if(userPref){
                let check = userPref === 'dark' ? "dark":'light';
                setMode(check);
                if(check === 'dark') {
                    document.documentElement.classList.add('dark');
                }else{
                    document.documentElement.classList.add('light');
                }
            }else{
                let check = mediaQuery.matches ? 'dark' : 'light';
                setMode(check);
                if(check === 'dark') {
                    document.documentElement.classList.add('dark');
                }else{
                    document.documentElement.classList.add('light');
                }
            }
        }
        handleChange();    //calling theme prevent changing from refresh
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    },[]);

    useEffect(() => {
      if(mode === 'dark'){
        window.localStorage.setItem('theme','dark');
        document.documentElement.classList.add('dark');
      }else{
        window.localStorage.setItem('theme','light');
        document.documentElement.classList.remove('dark');
      }
    }, [mode]);
    

  return [mode, setMode];
}
 

export default useDarkTheme;