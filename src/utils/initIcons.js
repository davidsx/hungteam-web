import {
    faFileInvoice,
    faFire,
    faHammer,
    faHandshake,
    faStoreAlt,
} from '@fortawesome/free-solid-svg-icons';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const initIcons = () => library.add(fab, faHandshake, faHammer, faFileInvoice, faFire, faStoreAlt);

export default initIcons;
