/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Head from "next/head";

import ShowcaseCard from "../components/ShowcaseCard.react";
import UiVimeoPlayer from "../components/UiVimeoPlayer";
import defaultStyles from "../styles/default-layout.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Showcase</title>
      </Head>

      <div className="mr-showcase__intro">

      <h1 className="mr-showcase__title">
        <strong>Open data visualization</strong> and <strong>sharing</strong>{' '}
        for <strong>genomic epidemiology</strong>
      </h1>

      <section className="mr-showcase__video">
        <UiVimeoPlayer
          src="https://player.vimeo.com/video/193252797?autoplay=1&loop=0&color=3C7383&title=0&byline=0&portrait=0"
          thumbnail="images/604876185-76c1626d483a2f8ae8a2128562da33a76a89b8b7396626a2380a8275f14826cb-d.webp"
        />
      </section>

      </div>

      <section className="mr-used-by">
        <div className="mr-used-by-content">
          <h2 className="mr-used-by-title">In partnership with</h2>
          <div className="mr-used-by-images">
            <img
              src="images/partners/phe.png"
              alt="Public Health England"
              title="Public Health England"
            />
            <img
              src="images/partners/cdc.png"
              alt="Centers for Disease Control and Prevention"
              title="Centers for Disease Control and Prevention"
            />
            <img
              src="images/partners/ecdc.png"
              alt="European Centre for Disease Prevention and Control"
              title="European Centre for Disease Prevention and Control"
            />
            <img
              src="images/partners/microbiology-society.png"
              alt="Microbiology Society"
              title="Microbiology Society"
            />
            <img
              src="images/partners/niph.svg"
              alt="Norwegian Institute of Public Health"
              title="Norwegian Institute of Public Health"
            />
          </div>
        </div>
      </section>

      <div className="mr-showcase-grid">
        <ShowcaseCard
          title={<React.Fragment>SARS-CoV-2 in the UK</React.Fragment>}
          linkUrl="https://microreact.org/project/cogconsortium"
          imageUrl="images/showcase/cogconsortium-uk.png"
          subTitle="COG-UK Consortium"
          supportingText={<React.Fragment>Continuous evaluation of the lineages circulating in the UK<br/>(updated weekly)</React.Fragment>}
          supportingLink="https://www.cogconsortium.uk/data/"
          externalLink
        />
        <ShowcaseCard
          title={<React.Fragment>Global Distribution of SARS-CoV-2</React.Fragment>}
          linkUrl="https://microreact.org/project/cogconsortium-global"
          imageUrl="images/showcase/cogconsortium-global.png"
          subTitle="COG-UK Consortium"
          supportingText={<React.Fragment>Continuous evaluation of the lineages circulating around the globe.<br/>(updated weekly)</React.Fragment>}
          supportingLink="https://www.cogconsortium.uk/data/"
          externalLink
        />
        <ShowcaseCard
          title={<React.Fragment>Tracing the spread of carbapenem-resistant <i>Klebsiella pneumoniae</i></React.Fragment>}
          linkUrl="/project/EuSCAPE_Kp"
          imageUrl="images/showcase/euscape-cover.png"
          subTitle="David S et al. 2019."
          supportingText={<React.Fragment>Epidemic of carbapenem-resistant <i>Klebsiella pneumoniae</i> in Europe is driven by nosocomial spread. Nature Microbiology 2058-5276. (doi:10.1038/s41564-019-0492-8)</React.Fragment>}
          supportingLink="https://www.nature.com/articles/s41564-019-0492-8"
        />
        <ShowcaseCard
          title={<React.Fragment><i>Streptococcus pneumoniae</i> PMEN2</React.Fragment>}
          linkUrl="/project/N1TRn11L"
          imageUrl="images/showcase/cover1.png"
          subTitle="Croucher NJ et al. 2014."
          supportingText="Variable recombination dynamics during the emergence, transmission and 'disarming' of a multidrug-resistant pneumococcal clone. BMC Biology 12:49"
          supportingLink="http://www.ncbi.nlm.nih.gov/pubmed/24957517"
        />
        <ShowcaseCard
          title="West African Ebola epidemic (2013-2016)"
          linkUrl="/project/west-african-ebola-epidemic?tt=rc"
          imageUrl="images/showcase/west-african-ebola-epidemic.png"
          subTitle="Dudas G. et al. 2017."
          supportingText="Phylogeographic reconstruction of the West African Ebola epidemic based 1610 complete genomes. Nature 1476-4687 (doi:10.1038/nature22040)."
          supportingLink="http://www.nature.com/nature/journal/vaop/ncurrent/full/nature22040.html"
        />
        <ShowcaseCard
          title="Zika virus in the Americas"
          linkUrl="/project/zika-virus?tt=rc"
          imageUrl="images/showcase/zika-virus.png"
          subTitle="Rodrigues Faria, N. et al. 2016."
          supportingText="Zika virus in the Americas: Early epidemiological and genetic findings. Science 352(6283):345-9."
          supportingLink="http://science.sciencemag.org/content/352/6283/345.article-info"
        />
        <ShowcaseCard
          title="Y-chromosome Human Phylogeny"
          linkUrl="/project/NyqrhlsB"
          imageUrl="images/showcase/cover4.png"
          subTitle="Hallast P. et al. 2015."
          supportingText="The Y-chromosome tree bursts into leaf: 13,000 high-confidence SNPs covering the majority of known clades. Mol Biol Evol 32(3):661"
          supportingLink="http://www.ncbi.nlm.nih.gov/pubmed/25468874"
        />
        <ShowcaseCard
          title={<i>Vibrio cholerae</i>}
          linkUrl="/project/EkKAhxoB"
          imageUrl="images/showcase/cover3.png"
          subTitle="Mutreja A. et al. 2011."
          supportingText="Evidence for several waves of global transmission in the seventh cholera pandemic. Nature 477:462"
          supportingLink="http://www.ncbi.nlm.nih.gov/pubmed/21866102"
        />
        <ShowcaseCard
          title={<React.Fragment><i>Staphylococcus aureus</i> ST239</React.Fragment>}
          linkUrl="/project/NJ-zAij8"
          imageUrl="images/showcase/staphylococcus_aureus.png"
          subTitle="Harris S. et al. 2010."
          supportingText="Evolution of MRSA during hospital transmission and intercontinental spread."
          supportingLink="http://www.ncbi.nlm.nih.gov/pubmed/20093474"
        />
        {/* <ShowcaseCard
          title={<React.Fragment><i>Klebsiella</i> - NCBI</React.Fragment>}
          linkUrl="/project/ncbi-klebsiella?tl=0"
          imageUrl="images/showcase/ncbi-klebsiella.png"
          subTitle="National Center for Biotechnology Information"
          supportingText="Klebsiella genomes from the NCBI Pathogen Detection project."
          supportingLink="ftp://ftp.ncbi.nlm.nih.gov/pathogen/Results/Klebsiella/latest_kmer"
        /> */}
        <ShowcaseCard
          title={<i>Yersinia enterocolitica</i>}
          linkUrl="/project/EJv0OVQd"
          imageUrl="images/showcase/yersinia-enterocolitica.png"
          subTitle="Reuter S. et al. 2015."
          supportingText="Directional gene flow and ecological separation in Yersinia enterocolitica. M Gen 1(3): doi:10.1099/mgen.0.000030."
          supportingLink="http://mgen.microbiologyresearch.org/content/journal/mgen/10.1099/mgen.0.000030"
        />
        <ShowcaseCard
          title={<React.Fragment><i>Salmonella</i> Typhi</React.Fragment>}
          linkUrl="/project/styphi"
          imageUrl="images/showcase/cover2.png"
          subTitle="Wong V. et al. 2015."
          supportingText={
            <React.Fragment>
              Phylogeographical analysis of the dominant multidrug-resistant H58 clade
              of <i>Salmonella</i> Typhi identifies inter- and intra-continental transmission events.
              Nature Genetics 47(6):632
            </React.Fragment>
          }
          supportingLink="http://www.ncbi.nlm.nih.gov/pubmed/25961941"
        />
      </div>


      <footer className={defaultStyles["mr-footer"]}>
        <p>
          <span>Funded by </span>
          <img
            src="/images/logos/wellcome-white.png"
            className={defaultStyles["mr-footer-logo-square"]}
          />
        </p>
        <p>
          <span>Developed at </span>
          <img src="/images/logos/bdi-white.png" className={defaultStyles["mr-footer-logo-square"]} />
          <img src="/images/logos/sanger.svg" className={defaultStyles["mr-footer-logo"]} />
        </p>
        <p>
          <a
            href="https://www.pathogensurveillance.net"
            target="_blank"
          >
            <img
              src="/images/logos/cgps-long-white.svg"
              className={defaultStyles["mr-footer-logo-cgps"]}
            />
          </a>
        </p>
        <p className={defaultStyles["cgps-copyright"]}>
          © 2018 Centre for Genomic Pathogen Surveillance
        </p>
      </footer>

    </div>
  );
}
