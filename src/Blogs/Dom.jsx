import React from 'react'

export default function Dom() {
  useEffect(() => {

    window.scrollTo(0, 0);
  }, []);
  return (
    <div>Dom</div>
  )
}
