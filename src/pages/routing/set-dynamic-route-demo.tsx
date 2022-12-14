import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const SetDynamicRouteDemo = () => {
  const location = useLocation();

  const [slugValue, setSlugValue] = useState('');

  return (
    <div>
      <div className="flex gap-2 text-lg">
        <span className="font-mono">{location.pathname}/</span>
        <input
          className="pl-2"
          value={slugValue}
          onChange={(event) => setSlugValue(event.target.value)}
        />
        <Link className="border px-2" to={slugValue}>
          Go
        </Link>
      </div>
    </div>
  );
};
