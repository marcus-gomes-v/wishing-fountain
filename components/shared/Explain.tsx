import { faEye, faPortalEnter } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

function Explain() {
    const { t } = useTranslation();

    const explanation = [
      { 
        title: t('components.explain.left.title'), 
        description: t('components.explain.left.description'),
        icon: faEye
      },
      { 
        title: t('components.explain.right.title'), 
        description: t('components.explain.right.description'),
        icon: faPortalEnter
      }
    ]
  
    return (
        <div className="relative">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
            <div className="grid grid-cols-2">
              {explanation.map((data, i) => {
                return (
                  <div key={i} className="text-gray-500 m-3">
                    <h2 className="text-4xl gap-2 flex items-center text-pelorous-500">
                      <FontAwesomeIcon icon={data.icon} className="h-7 w-auto" />
                      <span>{data.title}</span>
                    </h2>
                    <p className="my-3 text-xl">{data.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
    )
}

export default Explain;