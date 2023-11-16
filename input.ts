import { BusinessProcess } from ".";

const bp = new BusinessProcess('z', 'reg', 'witel', 'div', 'seg');
console.log(bp.getQueryAssisted());
console.log(bp.getQuerySelfService());