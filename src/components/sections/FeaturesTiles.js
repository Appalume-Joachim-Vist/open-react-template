import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

// Icons
import { FaReact } from 'react-icons/fa';
import { SiPwa } from 'react-icons/si';
import { GiArtificialIntelligence, GiServerRack } from 'react-icons/gi';
import { TbBrandJavascript, TbSettingsAutomation } from 'react-icons/tb';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Vad kan vi hjälpa er med?',
    paragraph: 'Vi fokuserar på framtidsäker utveckling av webbapplikationer och webbplatser. Vi har erfarenhet av att utveckla webbapplikationer och webbplatser av hög kvalitet.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                      <FaReact size={64} className='Icon'/>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    React.js
                    </h4>
                  <p className="m-0 text-sm">
                    React är ett mycket populärt JavaScript-bibliotek som används för att utveckla webbapplikationer.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <SiPwa size={64} className='Icon'/>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Progressive Web Apps
                    </h4>
                  <p className="m-0 text-sm">
                    Progressive Web Apps är en ny typ av webbapplikation som utvecklas i webbläsaren. Fördelar inkulderar snabbare appar, billigare underhåll samt enklare för användaren
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <GiArtificialIntelligence size={64} className='Icon'/>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Artificiell intelligens
                    </h4>
                  <p className="m-0 text-sm">
                    Att AI kommer spela en stor roll i framtiden och redan gör det idag är det nog få som inte är överrens om. Att bygga den kapaciteten redan nu kommer ge stora fördelar i framtiden
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <TbBrandJavascript size={64} className='Icon'/>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    JavaScript
                    </h4>
                  <p className="m-0 text-sm">
                    Javascript är det programmeringsspråk som hela webben är uppbyggd på. Genom att skriva våra appar i det säkerställer vi hög kompabilitet och hög kvalitet
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <GiServerRack size={64} className='Icon'/>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    IT drift
                    </h4>
                  <p className="m-0 text-sm">
                    Vi har mångårig erfarenhet av att drifta stora serverhallar samt Microsoft Active Directory och Exchange.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <TbSettingsAutomation size={64} className='Icon'/>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Automatisering
                    </h4>
                  <p className="m-0 text-sm">
                    Med våra automatiseringslösningar spar ni tid och pengar och ger er möjlighet att fokusera på det ni är bra på!
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;