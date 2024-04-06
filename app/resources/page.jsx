import AppCard from "@/components/resources/AppCard";
import Banner from "@/components/resources/Banner";
import ResourceCard from "@/components/resources/ResourceCard";
import TipsCard from "@/components/resources/TipsCard";
import React from "react";

export default function Resources() {
  return (
    <div
      className="bg-[#202835] overflow-auto"
    >
      <h1
        className="font-montserrat text-white md:text-5xl text-3xl font-bold p-8 text-center"
      >
        Your Health is A Priority!</h1>
        <Banner 
          image="resources1.svg"
        />
        <div className="2xl:w-[85%] mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row px-4 sm:justify-between">
              <ResourceCard 
                image="rcard1.svg"
                text="Suicide crisis helpline"
                contact="988"
              />  
              <ResourceCard 
                image="rcard2.svg"
                text="Immediate Danger or urgent medical support"
                contact="911"
              />
              <ResourceCard 
                image="rcard3.svg"
                text="Mental Health Helpline (All ages)"
                contact="+1-866-531-2600"
              />  
            </div>
            <div className="flex flex-col sm:flex-row px-4 sm:justify-between">
              <ResourceCard 
                image="rcard4.svg"
                text="Telephone Aid Line Kingston (TALK)"
                contact="+1-613-544-1771"
                subtitle="6pm - 2am"
              />  
              <ResourceCard 
                image="rcard5.svg"
                text="Crisis Mental Health Support at Student Wellness Services"
                contact="+1-613-533-2506"
                subtitle="1st floor Mitchell Hall, 69 Union Street"
              />    
              <ResourceCard 
                image="rcard6.svg"
                text="MindBeacon: Crisis Text Line"
                contact="Text &quot;MindBeacon&quot; to 741741"
              />  
            </div>
          </div>
        </div>

        <Banner 
          image="resources2.svg"
        />
        <div className="2xl:w-[85%] mx-auto">
          <div className="flex flex-col sm:flex-row px-4 sm:justify-between">
            <ResourceCard 
              image="rcard7.svg"
              text="BetterHelp Largest online network of lisensed therapists"
              link={{
                'href': "https://www.betterhelp.com/", 
                'text': "Better Help",
              }}
            />  
            <ResourceCard 
              image="rcard8.svg"
              text="Greenspace Free Ontario Therapist Matching & Paid Psychotherapy"
              link={{
                'href': "https://www.greenspacehealth.com/",
                'text': 'Green Space',
              }}
            />
            <ResourceCard 
              image="rcard9.svg"
              text="Sunnybrook navigation of mental health and addictions service system"
              link={{
                'href': "https://www.pridecounseling.com/",
                'text': 'Pride Counseling',
              }}
            />  
          </div>
        </div>

        <Banner 
          image="resources3.svg"
        />
        <div className="2xl:w-[85%] mx-auto">
          <div className="flex flex-col sm:flex-row px-4 sm:justify-between">
            <ResourceCard 
              image="rcard10.svg"
              text="Telehealth Ontario Speak to a registered nurse"
              contact="+1-866-797-0000"
            />  
            <ResourceCard 
              image="rcard11.svg"
              text="ConnexOntario For gambling, drug, alcohol, or mental health problems"
              contact="+1-866-531-2600"
            />
            <ResourceCard 
              image="rcard12.svg"
              text="Kids Help Phone Connects children and youth with a trained crisis responder"
              contact="+1-800-668-6868"
              subtitle="or text &quot;CONNECT&quot; to 686868"
            />  
          </div>

          <div className="flex flex-col sm:flex-row px-4 sm:justify-between">
            <ResourceCard 
              image="rcard13.svg"
              text="Good2Talk Connects individuals aged 17-25 with a trained crisis responder"
              contact="+1-866-925-5454"
              subtitle="or text &quot;GOOD2TALKON&quot; to 686868"
            />  
            <ResourceCard 
              image="rcard14.svg"
              text="Ontario Distress Centers for all ages with locations across Ontario"
              contact="Text &quot;SUPPORT&quot; to 258258"
              subtitle="2pm to 2am daily"
            />
            <ResourceCard 
              image="rcard15.svg"
              text="LGBT Youth Line ON peer support"
              contact="+1-647-694-4275"
              subtitle="Sun - Fri 4-9:30 PM"
            />  
          </div>
        </div>

        <Banner 
          image="resources4.svg"
        />
        <div className="2xl:w-[85%] mx-auto">
          <div className="flex flex-col sm:flex-row px-4 sm:justify-between">
            <ResourceCard 
              image="rcard16.svg"
              text="Addition & Mental Health Services (KFL&A)"
              contact="+1-866-626-6005 or +1-613-544-4229"
            />  
            <ResourceCard 
              image="rcard17.svg"
              text="AMHS Mental Health Walk-In Clininc"
              contact="+1-613-544-1356"
              subtitle="552 Princess Street"
            />
            <ResourceCard 
              image="rcard18.svg"
              text="Malby Centre Free Mental Health Services for Youth ages 18-24"
              contact="+1-844-855-8340"
              subtitle="31 Hyperion Court #100"
            />  
          </div>
          <div className="flex flex-col sm:flex-row px-4 sm:justify-around">
            <ResourceCard 
              image="rcard19.svg"
              text="Resolve Counseling Services"
              contact="+1-613-549-7850"
            />  
            <ResourceCard 
              image="rcard20.svg"
              text="Local counselors, therapists, and psychologists in Kingston"
              link={{
                'href': 'https://www.psychologytoday.com/ca',
                'text': 'Psychology Today',
              }}
            />
            <ResourceCard 
              transparent="true"
              image="rcard20.svg"
              text="Local counselors, therapists, and psychologists in Kingston"
              link={{
                'href': 'https://www.psychologytoday.com/ca',
                'text': 'Psychology Today',
              }}
            />
          </div>
        </div>

        <Banner 
          image="resources5.svg"
        />
        <div className="2xl:w-[85%] mx-auto">
          <div className="flex flex-col sm:flex-row px-4 sm:justify-between">
            <AppCard 
              image="rcard21.svg"
              title="Calm app"
              desc="Breathing, improved sleep quality, reduced stress and anxiety"
              link="https://play.google.com/store/apps/details?id=com.calm.android&hl=en_CA&gl=US"
            />  
            <AppCard 
              image="rcard22.svg"
              title="Headspace app"
              desc="Mindfulness, improved sleep, reduced stress, improved focus"
              link="https://play.google.com/store/apps/details?id=com.getsomeheadspace.android&hl=en&gl=US"
            />  
            <AppCard 
              image="rcard23.svg"
              title="Liberate App"
              desc="Safe space for Black community to develop mediation habits"
              link="https://play.google.com/store/apps/details?id=com.calm.android&hl=en_CA&gl=US"
            /> 
          </div>
          <div className="flex flex-col sm:flex-row px-4 sm:justify-between">
            <AppCard 
              image="rcard24.svg"
              title="Simply Being app"
              desc="Simply Being Guided Mediations for Relaxation and Presence"
              link="https://play.google.com/store/apps/details?id=com.meditationoasis.Relax1&hl=en_CA&gl=US"
            />  
            <AppCard 
              image="rcard25.svg"
              title="DBT Diary Card and Skills Coach App"
              desc="Dialectical behavior therapy app designed by a licensed clinical psychologist"
              link="https://play.google.com/store/apps/details?id=co.swasth.dbtcoach&hl=en_CA&gl=US"
            />  
            <AppCard 
              image="rcard26.svg"
              title="CBT Thought Diary App"
              desc="Mood journal record for Cognitive behavioural therapy"
              link="https://play.google.com/store/apps/details?id=com.moodtools.cbtassistant.app&hl=en_CA&gl=US"
            /> 
          </div>
        </div>

        <Banner 
          image="resources6.svg"
        />
        <div className="2xl:w-[85%] mx-auto"> 
        <div className="flex flex-col sm:flex-row px-4 sm:justify-between">
          <TipsCard 
            title="1"
            bold="Say"
            notBold="what you see"
            animated="Learn how to break the ice and start the conversation."
          />
          <TipsCard 
            title="2"
            bold="Show"
            notBold="You Care"
            animated="Learn how to build trust and support someone."
          />
          <TipsCard 
            title="3"
            bold="Hear"
            notBold="Them Out"
            animated="Learn how to be a good listener and balance the conversation."
          />
        </div>
        <div className="flex flex-col sm:flex-row px-4 sm:justify-between">
          <TipsCard 
            title="4"
            bold="Know"
            notBold="Your Role"
            animated="Learn how to set boundaries to protect your relationship and your mental health."
          />
          <TipsCard 
            title="5"
            bold="Connect"
            notBold="to Help"
            animated="Learn how to help someone access professional and community resources."
          />
          <TipsCard 
            title="..."
            bold="EARN YOUR BE THERE CERTIFICATE"
            link={{
              'href': "https://betherecertificate.org",
              'text': 'Be There Certificate'
            }}
          />
        </div>
      </div>

        
    </div>
  )
}
