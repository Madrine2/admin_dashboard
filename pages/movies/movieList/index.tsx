import React from "react";
import { AppProps } from "next/app";
import TopBar from "@/components/TopBar";
import Table from "@/components/Table";
import { MantineProvider } from "@mantine/core";
import Sidebar from "@/components/sidebar/Sidebar";

const headers = ['SL', 'NAME', 'CATEGORY', 'DURATION'];
const items = [
    { SL: '1',  NAME: 'Titanic', CATEGORY: 'Action', DURATION: '2h 3mins' },
    { SL: '2',  NAME: 'Inception', CATEGORY: 'Sci-Fi', DURATION: '2h 3mins'  },
    { SL: '1',  NAME: 'Titanic', CATEGORY: 'Action', DURATION: '2h 3mins'  },
    { SL: '2',  NAME: 'Inception', CATEGORY: 'Sci-Fi', DURATION: '2h 3mins'  },
    { SL: '1',  NAME: 'Titanic', CATEGORY: 'Action' , DURATION: '2h 3mins' },
    { SL: '2',  NAME: 'Inception', CATEGORY: 'Sci-Fi', DURATION: '2h 3mins'  },
    { SL: '1',  NAME: 'Titanic', CATEGORY: 'Action' , DURATION: '2h 3mins' },
    { SL: '2',  NAME: 'Inception', CATEGORY: 'Sci-Fi', DURATION: '2h 3mins'  },
    { SL: '1',  NAME: 'Titanic', CATEGORY: 'Action' , DURATION: '2h 3mins' },
    { SL: '2',  NAME: 'Inception', CATEGORY: 'Sci-Fi', DURATION: '2h 3mins'  },
    { SL: '1',  NAME: 'Titanic', CATEGORY: 'Action', DURATION: '2h 3mins'  },
    { SL: '2',  NAME: 'Inception', CATEGORY: 'Sci-Fi', DURATION: '2h 3mins'  },
    { SL: '1',  NAME: 'Titanic', CATEGORY: 'Action', DURATION: '2h 3mins'  },
    { SL: '2',  NAME: 'Inception', CATEGORY: 'Sci-Fi', DURATION: '2h 3mins'  },
    { SL: '1',  NAME: 'Titanic', CATEGORY: 'Action', DURATION: '2h 3mins'  },
    { SL: '2',  NAME: 'Inception', CATEGORY: 'Sci-Fi', DURATION: '2h 3mins'  },
    { SL: '1',  NAME: 'Titanic', CATEGORY: 'Action', DURATION: '2h 3mins'  },
    { SL: '2',  NAME: 'Inception', CATEGORY: 'Sci-Fi', DURATION: '2h 3mins'  },
    { SL: '1',  NAME: 'Titanic', CATEGORY: 'Action', DURATION: '2h 3mins'  },
    { SL: '2',  NAME: 'Inception', CATEGORY: 'Sci-Fi', DURATION: '2h 3mins'  },
    { SL: '1',  NAME: 'Titanic', CATEGORY: 'Action', DURATION: '2h 3mins'  },
    { SL: '2',  NAME: 'Inception', CATEGORY: 'Sci-Fi', DURATION: '2h 3mins'  },
    { SL: '1',  NAME: 'Titanic', CATEGORY: 'Action', DURATION: '2h 3mins'  },
    { SL: '2',  NAME: 'Inception', CATEGORY: 'Sci-Fi', DURATION: '2h 3mins'  },
    { SL: '1',  NAME: 'Titanic', CATEGORY: 'Action', DURATION: '2h 3mins'  },
    { SL: '2',  NAME: 'Inception', CATEGORY: 'Sci-Fi', DURATION: '2h 3mins'  },
    { SL: '1',  NAME: 'Titanic', CATEGORY: 'Action', DURATION: '2h 3mins'  },
    { SL: '2',  NAME: 'Inception', CATEGORY: 'Sci-Fi' , DURATION: '2h 3mins' },

];

const Movies: React.FC<AppProps> = () => {
    return (
        <MantineProvider>
            <div className="app-container flex">
                <Sidebar />
                <div className='bg-white'>
                    <TopBar admin={'Isaac'} title={'Movie List'} />
                    <Table data={items} headers={headers} actions={['edit', 'delete']} />
                </div>
            </div>
        </MantineProvider>
    );
};

export default Movies;
