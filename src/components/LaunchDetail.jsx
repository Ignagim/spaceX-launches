import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex, Text, Spacer, Tag, Spinner } from "@chakra-ui/react";
import * as API from '../services/launches';

export function LaunchDetail () {
    const [launch, setLaunch] = useState({})

    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId)
            .then(setLaunch)
            .catch(console.log)
    }, [launchId])

    return (
        <Box
            bg="gray.100"
            p={4}
            m={4}
            borderRadius="lg"
        >
            {!launch ? <Spinner /> : (
                <>
                    <Flex display='flex'>
                        <Text fontSize="2xl">
                        Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                        </Text>
                        <Spacer />
                        <Tag p={2} colorScheme= {launch.launch_success ? "green" : "red"}>
                            {launch.launch_success ? "Success" : "Failure"}
                        </Tag>
                    </Flex>
                    <Box>
                        <strong>Rocket:</strong> {launch.rocket?.rocket_name}
                        <br />
                        <strong>Location:</strong> {launch.launch_site?.site_name_long}
                        <br />
                        {launch.links?.video_link 
                            ? <>
                                <strong>Launch Video: </strong> 
                                <a href={launch.links?.video_link}>{launch.links?.video_link}</a> 
                                <br/>
                            </>
                            : null
                        }
                        {launch.launch_success ? null : (
                            <>
                                <strong>Failure details:</strong> {launch.details} 
                            </>
                        )}
                    </Box>
                </>
            )}
        </Box>
    )
}