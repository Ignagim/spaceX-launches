import { useState, useEffect } from "react";
import { Stack, Heading, Skeleton } from "@chakra-ui/react";
import { LaunchItem } from "./LaunchItem";
import * as API from '../services/launches';


export function LaunchList() {
    const [launches, setLaunches] = useState([]); 

    useEffect(() => {
        API.getAllLaunches()
            .then(setLaunches)
            .catch(console.log)
    }, [])

    return (
        <>
            <Heading align="center" as="h1" size="lg" m={8}>
                SpaceX Launches
            </Heading>
            {launches.length === 0 
                ? <Stack mx={6}>
                    <Skeleton borderRadius='lg' height='150px' />
                    <Skeleton borderRadius='lg' height='150px' />
                    <Skeleton borderRadius='lg' height='150px' />
                    <Skeleton borderRadius='lg' height='150px' />
                </Stack>
                : (
                    <section>
                        {launches.map(launch => (
                            <LaunchItem key={launch.flight_number} {...launch} />
                            ))}
                    </section>
                )
            }
        </>
    )
}