import mock from './mockAdapter';


import './apps/contact';
import './apps/userprofile/followers';
import './apps/userprofile/friends';

import './apps/notes';
import './components/Casos/casosData';




mock.onAny().passThrough();
