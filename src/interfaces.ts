export interface IData {
  courses: ICourses[], 
  socials: ISocials[], 
  youTube: ISocials, 
  contacts: IContacts[];
}

export interface ICourses {
      to: string;
      photo?: string;
      courseName: string;
      descr: string;
      date: string;
      longDescr: string;
      place: string;
      teachers: string;
      cost: string;
      format: string;
      methodology: string;
      result: string;
}

interface ISocials {
  value: string;
  href: string;
  target: string;
  rel: string;
}

interface IContacts {
  
    value: string;
    href: string,
    target?: string,
    rel?: string,
}

