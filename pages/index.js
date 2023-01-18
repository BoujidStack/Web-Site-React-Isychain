import React from 'react'
import AbsractSection from '../components/sections/abstract'
import ServicesSection from '../components/sections/services'
import PresentationSection from '../components/sections/presentation'
import ProjectsSection from '../components/sections/projects'
import TeamSection from '../components/sections/team'
import Temoignage from '../components/sections/temoignage'
import Technologie from '../components/sections/technologie'
import ContactSection from '../components/sections/contact'
import JobSection from '../components/sections/job'

export default function Index(){
    return (
        <>
            <AbsractSection />
            <PresentationSection />
            <Technologie/>
            <ServicesSection />
            <TeamSection />
            <ProjectsSection />
            <Temoignage />
            <JobSection />
            <ContactSection />
        </>
    )
}
